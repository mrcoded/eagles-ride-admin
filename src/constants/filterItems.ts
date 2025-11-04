export const bookingFilters = [
  {
    value: "booked",
    label: "Booked",
  },
  {
    value: "ongoing",
    label: "Ongoing",
  },
  {
    value: "assigned",
    label: "Assigned",
  },
  {
    value: "none",
    label: "Remove Filter",
  },
] as const;

export const driverFilters = [
  {
    value: "unassigned",
    label: "UnAssigned",
  },
  {
    value: "approved_driver",
    label: "Approved",
  },
  {
    value: "none",
    label: "Remove Filter",
  },
] as const;
