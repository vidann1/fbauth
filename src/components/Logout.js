import React from 'react';
import { auth } from '../configuration';
import { Box, Button, RoundedButton, Grommet, Anchor} from "grommet";
import { grommet } from "grommet/themes";
import { deepMerge } from "grommet/utils";


const LogoutBtn = () => 
	<Anchor primary label="logout" onClick={auth.doSignOut}/>
	


export default LogoutBtn;