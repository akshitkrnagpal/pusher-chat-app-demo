// @flow

type Info = {
    // Avatar URL
    avatarURL: string | typeof undefined;

    // Username
    username: string | typeof undefined;
};

export type User = {
    // User ID
    id: string | typeof undefined;

    // Info
    info: Info;
};
