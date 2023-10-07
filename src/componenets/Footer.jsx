import { Box, Divider, Typography } from "@mui/material"

const Footer = () => {
    return(
    <Box className="footer">
    <Typography variant="h4" component={"h4"}>Team NasGo</Typography>
    <Typography variant="p" component={"p"} sx={{
        fontSize : "1.1rem"
    }}>Nasa Space Apps Hackathon</Typography>
    <Typography variant="p" component={"p"} sx={{
        fontSize : "1.4rem"
    }}>{`<Developer />`} <br /> @Ayman-Yasser</Typography>
    <Divider sx={{borderWidth : "1px" , width:"95%" , my:"1rem"}} />
    <Typography variant="p" component={"p"}><Typography variant="h5" component={"h5"}>Data Research By </Typography><br /> @Ali Abdulaziz @Ziad El7arony @Sarah Kahwash @Adbelrahman Sameh</Typography>
        </Box>
    )
} 
export default Footer;