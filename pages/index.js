import React from "react";
import { useSession, signIn, signOut } from "next-auth/client";

export default function Home() {
    const [session] = useSession();
    return (
        <div>
            <h1>Github OAuth Demo</h1>

            {!session ? (
                <>
                    <button onClick={() => signIn("github")}>
                        Sign in with Github
                    </button>
                </>
            ) : (
                <>
                    <p>
                        Not {session.user.name || session.user.email}? Then
                        Logout and login again
                    </p>
                    <button onClick={signOut}>Logout</button> <br />
                </>
            )}
        </div>
    );
}
