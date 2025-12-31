import { useGlobalContext } from "@/hooks/useGlobalContext";

// Handle checkbox change
export const useHandleCheckboxChange = (
  setItemId?: React.Dispatch<React.SetStateAction<string | null>>
) => {
  const {
    setIsOpen,
    setIsModalOpen,
    setDriverId,
    setSelectedItemId,
    setSelectedUserId,
  } = useGlobalContext();

  const checkboxHandler = (
    checked: boolean,
    userId: string,
    itemId: string
  ) => {
    if (checked) {
      if (setItemId) {
        setIsOpen(true);
        setItemId?.(itemId);
      } else {
        setSelectedUserId(userId);
        setSelectedItemId(itemId);
        setIsModalOpen(true);
      }
    } else {
      if (setItemId) {
        setItemId(null);
        setDriverId("");
      } else {
        setSelectedItemId(null);
        setDriverId("");
        setSelectedUserId("");
        setIsModalOpen(false);
      }
    }
  };

  return checkboxHandler;
};
