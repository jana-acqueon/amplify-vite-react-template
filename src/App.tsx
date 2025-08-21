import { useAuthenticator, Authenticator } from '@aws-amplify/ui-react';
import { StorageBrowser } from '@aws-amplify/ui-react-storage';
import '@aws-amplify/ui-react/styles.css';

function App() {
  const { signOut } = useAuthenticator();

  return (
    <Authenticator hideSignUp={true}>
      <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h1>📁 Amplify S3 Storage Browser</h1>
          <button onClick={signOut} style={{ padding: "0.5rem 1rem", cursor: "pointer" }}>Sign out</button>
        </header>

        <section style={{ marginTop: "2rem" }}>
          <p>Upload, download, create folders, and manage your files directly in your Amplify S3 bucket.</p>
          <div style={{ marginTop: "1.5rem", border: "1px solid #ccc", borderRadius: "8px", padding: "1rem" }}>
            <StorageBrowser />
          </div>
        </section>
      </main>
    </Authenticator>
  );
}

export default App;