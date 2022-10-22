export default function Body({ children }) {
    return (
        <>
            <div className="main-body">{children}</div>
            <style jsx>{`
                .main-body {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                    main {
                        flex-grow: 1;
                    }
                }
            `}</style>
        </>
    );
}
