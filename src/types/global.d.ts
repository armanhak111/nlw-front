declare interface MainSlice {
  newDietID: string;
  adminAccess: boolean;
  isModalOpen: {status:boolean, type: string, message: any};
  loader: boolean;
  currentUser: any
  contactUsBackRoute: boolean
}

declare interface Store {
  main: MainSlice;
}
