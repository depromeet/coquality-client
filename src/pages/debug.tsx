import { useAuth } from "@hooks/useAuth"

export default function() {
    const auth = useAuth()
    return <div>
        {JSON.stringify(auth)}
    </div>
}