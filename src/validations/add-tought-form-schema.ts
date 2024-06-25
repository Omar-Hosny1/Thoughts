import * as Yup from 'yup';

function extractTextFromHtml(htmlContent: string): string {
  // Create a new DOMParser instance
  const parser = new DOMParser();
  // Parse the HTML content
  const document = parser.parseFromString(htmlContent, 'text/html');
  // Get the text content from the parsed document
  const textContent = document.body ? document.body.textContent || '' : '';

  return textContent.trim();
}

const AddThoughtSchema = Yup.object({
  thoughtTitle: Yup.string()
    .trim()
    .min(0, "This Field Can't Be Empty")
    .required('Please Enter Your Thought Title'),
  thoughtBody: Yup.string()
    .trim()
    .test('htmlContent', 'Please Enter Your Thought Body', (value) => {
      const textContent = extractTextFromHtml(value || '');
      return textContent.length > 0;
    }),
  tags: Yup.array()
    .of(
      Yup.string()
        .required('Tag is required')
        .matches(/^[a-zA-Z]+$/, 'Tag can only contain alphabetic characters'),
    )
    .min(3, 'At least 3 tags are required')
    .max(5, 'Maximum 5 tags')
    .required('Tag list is required')
    .test('unique', 'Tags must be unique', (value) => {
      if (!value) return true;
      const uniqueTags = new Set(value);
      return uniqueTags.size === value.length;
    }),
});

export default AddThoughtSchema;
