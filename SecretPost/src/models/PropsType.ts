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

// export interface UserProps {
//     uid: string;
//     photoURL: string;
// }

// export interface UserProps {
//     uid: string;
//     photoURL: string | '';
//     isAuthenticated: boolean;
// }

// declare module 'react-redux' {
//     interface DefaultRootState extends UserProps {}
// }

// export interface UserState {
//     isAuthenticated: boolean;
//     uid: string | null;
//     photoURL: string | null;
// }