
import { useEffect, useState } from "react";

// @ts-ignore
export default function ClientOnly({ children, ...delegated }) {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) {
        return null;
    }

    // @ts-ignore
    return <div {...delegated}>{children}</div>;
}