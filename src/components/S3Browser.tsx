// import { FileUploader } from '@aws-amplify/ui-react-storage';
import '@aws-amplify/ui-react/styles.css';
import { StorageBrowser } from '@aws-amplify/ui-react-storage';

export default function StoragePage() { return <StorageBrowser /> }

// export const DefaultFileUploaderExample = () => {
//     return (
//         <FileUploader
//             acceptedFileTypes={['image/*']}
//             path="public/"
//             maxFileCount={1}
//             isResumable
//         />
//     );
// };