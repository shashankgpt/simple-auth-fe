import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Alert from '@mui/material/Alert';
import { AuthActionTypes } from "./types";
import CircularProgress from '@mui/material/CircularProgress';

interface Props {
  children: React.ReactNode;
  submitButtonText: string;
  cancelText: string;
  formLink?: JSX.Element | JSX.Element[];
  onSubmit: () => void;
  onReset: () => void;
  formName: string;
  message?: {
    text: string;
    type: AuthActionTypes;
  };
  loading?: boolean
}

export function CardForm({formName, formLink, onSubmit, message, children, onReset, loading, submitButtonText}: Props) {
  return (
    <div className="flex justify-center mt-20">
      <Card sx={{ minWidth: 800 }}>
        <CardContent>
        {message && (
            <Alert severity={message.type}>{message.text}</Alert>
          )}
          <Typography variant="h5" component="div" className="text-center">
            {formName}
          </Typography>
          {children}
        </CardContent>
        <CardActions>
          <div className="flex flex-col w-full">
            <div className="flex flex-row justify-around w-full">
              <Button variant="contained" disabled={loading} endIcon={loading && <CircularProgress />} onClick={onSubmit}>
                {submitButtonText}
              </Button>
              <Button variant="outlined" onClick={onReset}>Cancel</Button>
            </div>
            <div className="flex justify-center mt-4">
              {formLink}
            </div>
          </div>
        </CardActions>
      </Card>
    </div>
  );
}
