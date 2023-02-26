export interface TeamDataInterface {
  [key: string]: {
    players: PlayerDataInterface[];
  };
}

export interface PlayerDataInterface {
  country: string;
  firstName: string;
  joinDate: string;
  position: string;
  profilePageUrl: string | undefined;
  pageProfileUrl: string | undefined;
  shirtNumber: string | "unknown";
  squadImage: string | undefined;
  surname: string;
}

