import { 
    GridColumnMenuContainer,
    GridFilterMenuItem,
    HideGridColMenuItem
} from "@mui/x-data-grid";


const CustomColumnMenu = (props) => {
    const { hideMenu, currentColumn, open} = props;
    return (
        <GridColumnMenuContainer
        hideMenu={hideMenu}
        currentColumn={currentColumn}
        open={open}
        >
            <GridFilterMenuItem onClick={hideMenu} colummn={currentColumn} />
            <HideGridColMenuItem onClick={hideMenu} colummn={currentColumn} />
        </GridColumnMenuContainer>
    )
}


export default CustomColumnMenu;