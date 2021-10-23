declare interface MainSlice {
  newDietID: string;
  adminAccess: boolean;
  isModalOpen: {status:boolean, type: string, message: any};
}

declare interface Store {
  main: MainSlice;
}
