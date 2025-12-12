export type SelectedItemCardProps = {
  status?: string;
  trip_type?: string;
  schedule_type?: string;
};

export type ValidSelectedItemData = Partial<SelectedItemCardProps> & {
  schedule_type: string;
  status: string;
  trip_type: string;
};

export interface SelectedUserAvatarProps {
  childData?: UserProps["child"] | undefined;
  userData?: UserProps | undefined;
  selectedDriverData?: DriversDataProps | undefined;
}

export interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: (reset: () => void) => ReactNode;
  onReset?: () => void;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export interface ErrorFallbackProps {
  reset: () => void;
}
