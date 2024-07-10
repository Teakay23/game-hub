import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genreName = useGenres().data.results.find(
    (genre) => genre.id === gameQuery.genreId
  )?.name;
  const platformName = usePlatforms().data.results.find(
    (platform) => platform.id === gameQuery.platformId
  )?.name;

  const heading = `${platformName || ""} ${genreName || ""} Games`;

  return (
    <Heading marginY={5} fontSize="5xl" as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
