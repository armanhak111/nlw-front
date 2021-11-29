export const ROUTES = {
    admin: '/system-administrator',
    home: '/',
    getQuote: '/getquote',
    profile: '/profile',
    user: '/user'
}

export const ADMIN_PASSWORD = 'tortila1111';

export const DAYS: number[] = [1,2,3,4,5,6]

export const ILNESS: string[] = [
    'Diabetes',
    'Gastritis or stomach ulcer',
    'Kidney disease',
    'Vascular diseases',
    'Oncological diseases',
    'No any diseases'
];

export const GET_QUOTE_VALUES_INITIAL = {
    email: "",
    message: "",
    name: "",
    old: "",
    weight: "",
}

export const PLEASE_FILL = 'Please fill in the fields';
export const EMAIL_INVALID = 'Email is not valid'
export const ID_INVALID = 'Please enter a valid Diet ID'
export const USER_CANT_FIND = 'User not found with this Diet ID'
export const cantAccess = (name:string) => {
    return `Dear ${name}, you can go to your profile and see your diets only after payment`
}

export const OPACITIES = ['1', '1','0.7', '0.5']


export const filteredNumber = (currentUser:any, index:number) => {
    const diet1 = currentUser.weight[index - 1]
    const diet2 = currentUser.weight[index]
    return `-  ${Number(diet1.substring(0, diet1.length - 3)) - Number(diet2.substring(0, diet2.length - 3))} ${currentUser.weight[0].split(" ")[1].toUpperCase()}`
}

export const totalLose = (currentUser:any) => {
    const diet1 = currentUser.weight[0]
    const diet2 = currentUser.weight[currentUser.weight.length - 1]
    console.log(diet1,diet2)
    return `${Number(diet1.substring(0, diet1.length - 3)) - Number(diet2.substring(0, diet2.length - 3))} ${currentUser.weight[0].split(" ")[1].toUpperCase()}`
}