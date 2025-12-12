export interface DriversDataProps {
  _id: string;
  image: string;
  fullname: string;
  email: string;
  trip_type: string;
  isDriverApproved?: boolean;
  phone_number?: string;
  status: string;
  residential_address?: string;
  car_insurance: string;
  driver_abstract: string;
  background_check: string;
  criminal_check_rec: string;
  residential_address: string;
  child_intervention_rec: string;
}

export interface DriverInfoProps {
  selectedDriver: {
    _id: string;
    email: string;
    phone_number: string;
    car_insurance: string;
    driver_abstract: string;
    background_check: string;
    criminal_check_rec: string;
    residential_address: string;
    child_intervention_rec: string;
  };
  selectedRide: {
    _id: string;
    email: string;
    phone_number: string;
    residential_address: string;
  };
}
