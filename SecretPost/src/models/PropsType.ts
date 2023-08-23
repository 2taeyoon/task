// Login component start!
export type LoginIconProps = {
    text: string;
    bgStyle: React.CSSProperties;
    logoStyle: React.CSSProperties;
    colorStyle?: React.CSSProperties;
    GoogleLoginHandler?: () => void;
    GithubLoginHandler?: () => void;
};
// Login component end!

// Login ProtectedRoute Start!
export type isLoggedInProps = {
    isLoggedIn: boolean;
}
// Login ProtectedRoute End!


// export interface UserProps {
//     uid: string;
//     photoURL: string;
// }

export interface UserProps {
    uid: string | null;
    photoURL: string | '';
}

declare module 'react-redux' {
    interface DefaultRootState extends UserProps {}
}