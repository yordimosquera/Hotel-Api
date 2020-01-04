export const ErrorResponses = {
  findHotels: (error: any) => {
    return `Error finding hotels.--->${error}`;
  },
  findHotel: (id: string, error: any) => {
    return `Error finding an hotel with the id: ${id}.--->${error}`;
  }
};
