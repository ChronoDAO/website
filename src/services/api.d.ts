declare module 'api' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const axiosInstance: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const fetchTabsFromAPI: () => Promise<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const fetchGameDetailsFromAPI: (gameId: string) => Promise<any>;
}
