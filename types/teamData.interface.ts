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
  profilePageUrl: string | "unknown";
  pageProfileUrl: string | "unknown";
  shirtNumber: string | "unknown";
  squadImage: string | undefined;
  surname: string;
}

