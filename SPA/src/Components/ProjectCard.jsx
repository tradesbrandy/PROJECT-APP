import {Box,Card,CardContent,Typography,}from"@mui/material";
function ProjectCard ({project}){
    return(
        <Card
            sx={{
                display: "flex",
                alignItems: "center",
                boxShadow: "none",
                mb: 4,
             }}
        >
        <Box
            sx={{
              width: { xs: 80, sm: 115 },
             height: { xs: 80, sm: 115 },
             flexShrink: 0,
             border: "1px solid rgb(57, 3, 216)",
             borderRadius: 2,
             position: "relative",

            "&::before, &::after": {
             content: "''",
            position: "absolute",
             width: { xs: 55, sm: 80 },
             height: "1.5px",
             backgroundColor: "rgb(42, 23, 219)",
             left: "50%",
             top: "50%",
             },
             "&::before": {
             transform: "translate(-50%,-50%)rotate(45deg)",
                    },
             "&::after": {
             transform: "translate(-50%,-50%)rotate(-45deg)",
                },
                }}
            />
         <CardContent>
            <Typography 
                component="h3"
                sx={{
             fontSize: { xs: "1.6rem", md: "2.2rem" },
             fontWeight: 400,}}
  >
         {project.title}
 </Typography>
     <Typography 
     sx={{
        fontSize:{xs:"1rem",sm:"1.4rem"},
     }}
 >
         {project.description} 
       </Typography>
    </CardContent>
</Card>
 );
}

export default ProjectCard;