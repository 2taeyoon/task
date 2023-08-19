// Login component start!
export type LoginIconProps = {
    text: string;
    bgStyle: React.CSSProperties;
    logoStyle: React.CSSProperties;
    colorStyle?: React.CSSProperties;
    googleLoginHandler?: () => void;
    githubLoginHandler?: () => void;
};
// Login component end!

export type isLoggedInProps = {
    isLoggedIn: boolean;
}
// Login ProtectedRoute End!