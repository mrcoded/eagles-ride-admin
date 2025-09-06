import { useGlobalContext } from "@/hooks/useGlobalContext";

// Handle checkbox change
export const useHandleCheckboxChange = (
  setItemId?: React.Dispatch<React.SetStateAction<string | null>>
) => {
  const { setIsOpen, setIsModalOpen, setSelectedItemId, setSelectedUserId } =
    useGlobalContext();

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
      if (setItemId) setItemId(null);
      else {
        setSelectedItemId(null);
        setSelectedUserId("");
        setIsModalOpen(false);
      }
    }
  };

  return checkboxHandler;
};
