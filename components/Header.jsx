//react
import { useState } from 'react'
//import from next
import Link from 'next/link'
//mui components
import { AppBar,Container , Button, Typography, Toolbar, IconButton,Menu, MenuItem } from '@mui/material'
//mui icons
import { MenuRounded } from '@mui/icons-material'

//header component
const Header = () => {

    //menuHndle
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <AppBar position='static' color='default' elevation={0} sx={{borderBottom: (theme) => `1px solid ${theme.palette.divider}`}}>
            <Container size="sm">
                <Toolbar sx={{ flexWrap: 'wrap' }}>
                    <Link href='/' passHref>
                        <Typography variant="h6"  noWrap sx={{flexGrow: 1}} >Manzil</Typography>
                    </Link>
                    <nav>
                        <IconButton size="large" edge="start" aria-label="menu" sx={{ mr: 2 }} onClick={handleClick}>
                            <MenuRounded />
                        </IconButton>
                        <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{ 'aria-labelledby': 'basic-button', }}>
                            <MenuItem><Link href='/for-sale' passHref><Button size="small">Buy Property</Button></Link></MenuItem>
                            <MenuItem><Link href='/for-rent' passHref><Button size="small">Rent Property</Button></Link></MenuItem>
                            <MenuItem><Link href='/login' passHref><Button variant="contained" size="small">Register</Button></Link></MenuItem>
                            
                        </Menu>
                        
                        
                    </nav>
                </Toolbar>
            </Container>
            
        </AppBar>
    )
}

export default Header
