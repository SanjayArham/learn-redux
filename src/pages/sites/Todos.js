import React from 'react';
import { useGetTodosQuery, useUpdateTodosMutation } from '../../services/TodosApi';

// LAYOUT
import SiteLayout from '../../layouts/SiteLayout';

// MUI
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
// import IconButton from '@mui/material/IconButton';
// import CommentIcon from '@mui/icons-material/Comment';

function Todos() {

    const todos = useGetTodosQuery();
    const [updateTodosCompleted, updateTodosResponse] = useUpdateTodosMutation();

    const todosData = todos.data;


    const handleTodosCompleted = (data) => {
        
    }

    return (
        <SiteLayout>
            <div className='page-todos'>
                <div className='container'>
                    <div className='todos_list_wrapper'>
                        <List className='todos_list' sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                            {todosData.map((elm, i) => (
                                <ListItem className='todos_list_item' key={i}>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <Checkbox
                                            edge="start"
                                            checked={elm.completed}
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{ 'aria-labelledby': elm.title }}
                                            />
                                        </ListItemIcon>  
                                        <ListItemText id={ elm.id } primary={ elm.title } />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </div>
                </div>
            </div>
        </SiteLayout>
    )
}

export default Todos;
