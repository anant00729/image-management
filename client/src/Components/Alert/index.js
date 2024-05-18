import React, { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import { Snackbar, SnackbarContainer, AlertLabel, AlertLogo } from "./style";
export default function Alerts() {
  const { alerts } = useContext(GlobalContext);
  const showAlertBox = (alert) => {
    return (
      <Snackbar isVisible={!!alert?.id} id="snackbar">
        <SnackbarContainer>
          <AlertLabel>{alert.msg}</AlertLabel>
        </SnackbarContainer>
      </Snackbar>
    );
  };

  return alerts.length > 0 ? showAlertBox(alerts[alerts.length - 1]) : null;
}