import React from 'react'
import { useFirebase } from "../Data/FirebaseProvider";

export default function Login() {
    const { currentUser } = useFirebase();
    return (
        <div>

        </div>
    )
}

