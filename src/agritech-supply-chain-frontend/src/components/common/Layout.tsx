import React, { useState, ReactNode } from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ToggleOff from '@mui/icons-material/ToggleOff';
import ToggleOn from '@mui/icons-material/ToggleOn';
import { Link } from 'react-router-dom';

// Define the type for a sidebar item
interface SidebarItem {
  text: string;
  path: string;
  icon: ReactNode; // ReactNode allows using JSX as a type for icons
}

// Define the props for the Layout component
interface LayoutProps {
  children: ReactNode; // For rendering child components
  sidebarItems: SidebarItem[]; // Array of sidebar items
  darkMode: boolean; // State to track if dark mode is active
  setDarkMode: (mode: boolean) => void; // Function to toggle dark mode
}

const Layout: React.FC<LayoutProps> = ({ children, sidebarItems, darkMode, setDarkMode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const drawerWidth = 240; // Local constant for drawer width

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar>
        <Typography variant="h6" noWrap component="div" sx={{ color: darkMode ? '#fff' : '#4caf50' }}>
          Agertech Menu
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {sidebarItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItem
              component={Link}
              to={item.path}
              sx={{
                '&:hover': {
                  backgroundColor: darkMode ? '#4caf50' : '#81c784',
                },
              }}
            >
              <ListItemIcon sx={{ color: darkMode ? '#fff' : '#1a237e' }}>{item.icon}</ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ color: darkMode ? '#fff' : '#1a237e' }}
              />
            </ListItem>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: darkMode ? '#333' : '#4caf50',
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Agertech Dashboard
          </Typography>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <IconButton onClick={() => setDarkMode(!darkMode)} color="inherit">
            {darkMode ? <ToggleOn /> : <ToggleOff />}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={toggleDrawer}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: darkMode ? '#4caf50' : '#EFFAFF',
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: darkMode ? '#4caf50' : '#4caf50',
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          backgroundColor: darkMode ? '#4caf50' : '#F1F8E9',
          minHeight: '100vh',
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
