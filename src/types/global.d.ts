declare interface MainSlice {
  newDietID: string;
  adminAccess: boolean;
}

declare interface Store {
  main: MainSlice;
}
