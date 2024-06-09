import React from "react";
import "./Alert.css";

interface AlertProps {
  title: string;
  description: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const Alert: React.FC<AlertProps> = ({ title, description, onConfirm, onCancel }) => {
  return (
    <div className="alert-dialog">
      <div className="alert-dialog-content">
        <div className="alert-dialog-header">{title}</div>
        <div className="alert-dialog-description">{description}</div>
        <div className="alert-dialog-footer">
          <button className="alert-btn btn-cancel" onClick={onCancel}>
            Cancel
          </button>
          <button className="alert-btn btn-continue" onClick={onConfirm}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
