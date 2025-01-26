export interface IObtained{
    obtained: boolean
}

export class UserBook implements IObtained{
    obtained: boolean = false;
}

export class UserCat implements IObtained{
    obtained: boolean = false;
}