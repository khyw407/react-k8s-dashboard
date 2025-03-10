import React, {useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Card, CardContent, Grid, Typography, Divider,
  Table, TableBody, TableCell, TableRow, ListItemText, colors, TableHead
} from '@material-ui/core';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {height: '100%'},
  item: {
    display: 'flex',
    flexDirection: 'column'
  },
  title: {
    fontWeight: 700
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  inner: {
    minWidth: 300
  },
  tableCell: {
    fontWeight: 900,
    fontSize: 'large',
  },
  critical: {
    '& $indicator': {
      borderColor: colors.red[600]
    }
  },
  tableHead: {
    backgroundColor: '#fafafa'
  },
  indicator: {
    height: 12,
    width: 12,
    borderWidth: 4,
    borderStyle: 'solid',
    borderColor: colors.cyan[500],
    borderRadius: '50%'
  },
  listItemText: {
    marginRight: theme.spacing(1)
  }
}));

const List = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [list] = useState(mockData);

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
          <Grid 
            container
            justify="space-between"
          >
            <Grid item>
                <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                    variant="h6"
                >
                    Host List
                </Typography>
            </Grid>
          </Grid>
          <Divider className={classes.divider} />
          <PerfectScrollbar options={{ suppressScrollY: true }}>
            <div className={classes.inner} style={{ overflow: 'auto', height: '350px' }}>
                <Table>
                    <TableHead className={classes.tableHead}>
                        <TableRow>
                            <TableCell className={classes.tableCell}>Host Name</TableCell>
                            <TableCell className={classes.tableCell}>Host Ip</TableCell>
                            <TableCell className={classes.tableCell}>CPU (%)</TableCell>
                            <TableCell className={classes.tableCell}>Memory (%)</TableCell>
                            <TableCell className={classes.tableCell}>Disk (%)</TableCell>
                            <TableCell className={classes.tableCell}>event</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {list.map((item, i) => (
                          <TableRow key={item.id}>
                            <TableCell>
                              <ListItemText
                                  className={classes.listItemText}
                                  primary={
                                    <>
                                      <Typography
                                        variant="subtitle2"
                                        color="textPrimary"
                                      >
                                        <strong>{item.hostName}</strong>
                                      </Typography>
                                    </>
                                  }
                              />
                            </TableCell>
                            <TableCell>
                              <ListItemText
                                  className={classes.listItemText}
                                  primary={
                                    <>
                                      <Typography
                                        variant="subtitle2"
                                        color="textPrimary"
                                      >
                                        <strong>{item.hostIp}</strong>
                                      </Typography>
                                    </>
                                  }
                              />
                            </TableCell>
                            <TableCell>
                              <ListItemText
                                  className={classes.listItemText}
                                  primary={
                                    <>
                                      <Typography
                                        variant="subtitle2"
                                        color="textPrimary"
                                      >
                                        <strong>{item.cpu}</strong>
                                      </Typography>
                                    </>
                                  }
                              />
                            </TableCell>
                            <TableCell>
                              <ListItemText
                                  className={classes.listItemText}
                                  primary={
                                    <>
                                      <Typography
                                        variant="subtitle2"
                                        color="textPrimary"
                                      >
                                        <strong>{item.memory}</strong>
                                      </Typography>
                                    </>
                                  }
                              />
                            </TableCell>
                            <TableCell>
                              <ListItemText
                                  className={classes.listItemText}
                                  primary={
                                    <>
                                      <Typography
                                        variant="subtitle2"
                                        color="textPrimary"
                                      >
                                        <strong>{item.disk}</strong>
                                      </Typography>
                                    </>
                                  }
                              />
                            </TableCell>
                            <TableCell>
                              <ListItemText
                                  className={classes.listItemText}
                                  primary={
                                    <>
                                      <Typography
                                        variant="subtitle2"
                                        color="textPrimary"
                                      >
                                        <strong>{item.event}</strong>
                                      </Typography>
                                    </>
                                  }
                              />
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            </PerfectScrollbar>
      </CardContent>
    </Card>
  );
};

List.propTypes = {
  className: PropTypes.string
};

export default List;
