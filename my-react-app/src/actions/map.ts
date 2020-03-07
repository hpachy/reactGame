export const mapSwitcher = (map : string): {
    type: string;
    payload: { map : string };
  } => ({
    type: "SWITCH_MAP",
    payload: {
      map: map
    }
  });
  