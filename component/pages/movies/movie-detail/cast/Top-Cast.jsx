import Link from "next/link";
import { Box, Card, Typography } from "@mui/material";
import ImageCast from "./Image-Cast";
import classes from "./Style-Casts";

const TopCast = ({ casts, type }) => {

  return (
    <Box sx={classes.boxParent}>
      <Typography variant="h4" sx={classes.titleTopCast}>
        Top Cast
      </Typography>
      <Box sx={classes.boxMainParentCast}>
        <Box sx={classes.boxSubParentCast}>
          {casts.cast.map(
            (cast) =>
              cast.id && (
                <Card
                  sx={classes.boxCardCast}
                  key={cast.id ? cast.id : cast.name}
                >
                  <Link href={cast.id && `actor/${cast.id}`}>
                    <Box sx={classes.boxCardCast}>
                      <ImageCast image={cast.profile_path} alt={cast.name} />
                      <Typography variant="body1" sx={classes.spanNameCast}>
                        {cast.name}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={classes.spanNameCharacter}
                      >
                        {type ? cast.roles[0].character : cast.character}
                      </Typography>
                      {type && (
                        <Typography variant="body1" sx={classes.spanEpisode}>
                          {cast.roles[0].episode_count} Episodes
                        </Typography>
                      )}
                    </Box>
                  </Link>
                </Card>
              )
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default TopCast;
