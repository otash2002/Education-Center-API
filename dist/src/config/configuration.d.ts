declare const _default: () => {
    jwt: {
        secret: string;
        expiresIn: string;
    };
    database: {
        url: string;
    };
    app: {
        port: number;
        nodeEnv: string;
    };
};
export default _default;
