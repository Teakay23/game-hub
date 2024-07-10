import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  onSelectPlatform: (platformId: number) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  const selectedPlatformName =
    data.results.find((platform) => platform.id === selectedPlatformId)?.name ||
    "";

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatformName || "Platforms"}
      </MenuButton>
      <MenuList>
        {data.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectPlatform(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
