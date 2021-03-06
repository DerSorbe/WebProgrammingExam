import React from 'react';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from "react-router-dom";
import Table from "@material-ui/core/Table"
import { makeStyles } from '@material-ui/core/styles';

// useStyles ist hier quasi die .css mit Material hat man die Möglichkeit direkt in der .jsx das Styling vorzunehmen
const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute', 
    left: '35%', 
    top: '10%',
  },
}));

export default function Insert(input) {
  const classes = useStyles();
  let content=[];
  //alle Elemente aus den Ingredients auslesen
  //den gespeicherten State der Checkbox der Komponente CheckBox übergeben
  Object.values(input.state).forEach(element=>{
    content.push(
      <tr>
        <td>
          {element.Ingredient}
        </td>
        <td>
          <Checkbox checked={element.selected} onChange={() => input.handleChange(element.id)}/>
        </td>
      </tr> 
    )
  });

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <h1>Vorhandene Zutaten:</h1>
        <Button className={classes.Button} variant="contained" component={Link} to={'/Overview'} >
          Drinks anzeigen
        </Button>
        <Table className={classes.Table}>
          {content}
        </Table>
      </div>
    </form>
  );
}