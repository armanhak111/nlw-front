declare interface MainSlice {
  newDietID: string;
  adminAccess: boolean;
  isModalOpen: {status:boolean, type: string, message: any};
  loader: boolean;
  currentUser: any
}

declare interface Store {
  main: MainSlice;
}
