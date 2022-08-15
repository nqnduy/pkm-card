export const variable = {
    color: {
        text_color: '#626262',
    },
    container: {
        maxWidth: '100%',
        width: '1170px',
    },
    breakpoint: {
        xxsMin: '400px',
        xsMin: '768px',
        smMin: '992px',
        mdMin: '1200px',
        lgMin: '1600px',
    },
};
const VariableStyle = () => {
    return (
        <>
            <style jsx global>{`
                html,
                body,
                main {
                }
            `}</style>
        </>
    );
};

export default VariableStyle;
