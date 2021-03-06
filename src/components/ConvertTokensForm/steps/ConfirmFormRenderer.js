import React from 'react';
import styled from 'styled-components';
import TxNotification from '../../TxNotification';
import { Icon } from '@blueprintjs/core';

const ConfirmFormRenderer = (props: Props) => {
  const {
    fromToken,
    allowTxStatus,
    allowTxHash,
    allowTxReceipt,
    convertTxStatus,
    convertTxHash,
    convertTxReceipt,
    transactionStatus,
  } = props;

  const notificationBoxTitles = {
    allow: {
      reverted: 'Allow Trading Transaction Failed',
      sent: 'Allowing Trading ...',
      confirmed: 'Allow Trading Transaction Successful',
    },
    convert: {
      reverted: 'Convert Ether Transaction Failed',
      sent: 'Converting Ether  ...',
      confirmed: 'Convert Ether Transaction Successful',
    },
  };

  switch (transactionStatus) {
    case 'failed':
      return (
        <div>
          <ConfirmBox>
            <ConfirmIconBox>
              <Icon icon="error" intent="danger" iconSize={200} />
            </ConfirmIconBox>
            <h4>There was a problem with your transaction. But no worries, your funds are safe</h4>
          </ConfirmBox>
          <TxNotificationBox>
            <TxNotification
              status={allowTxStatus}
              hash={allowTxHash}
              receipt={allowTxReceipt}
              title={notificationBoxTitles.allow[allowTxStatus]}
            />
          </TxNotificationBox>
          <TxNotificationBox>
            <TxNotification
              status={convertTxStatus}
              hash={convertTxHash}
              receipt={convertTxReceipt}
              title={notificationBoxTitles.convert[convertTxStatus]}
            />
          </TxNotificationBox>
        </div>
      );
    case 'sent':
      return (
        <div>
          <ConfirmBox>
            <h3>Transactions have been sent!</h3>
          </ConfirmBox>
          <TxNotificationBox>
            <TxNotification
              status={allowTxStatus}
              hash={allowTxHash}
              receipt={allowTxReceipt}
              title={notificationBoxTitles.allow[allowTxStatus]}
            />
          </TxNotificationBox>
          <TxNotificationBox>
            <TxNotification
              status={convertTxStatus}
              hash={convertTxHash}
              receipt={convertTxReceipt}
              title={notificationBoxTitles.convert[convertTxStatus]}
            />
          </TxNotificationBox>
        </div>
      );
    case 'confirmed':
      return (
        <div>
          <ConfirmBox>
            <ConfirmIconBox>
              <Icon icon="tick-circle" intent="success" iconSize={200} />
            </ConfirmIconBox>
            <h3>Your {fromToken.symbol} has been successfully tokenized. You can now start trading</h3>
          </ConfirmBox>
          <TxNotificationBox>
            <TxNotification
              status={allowTxStatus}
              hash={allowTxHash}
              receipt={allowTxReceipt}
              title={notificationBoxTitles.allow[allowTxStatus]}
            />
          </TxNotificationBox>
          <TxNotificationBox>
            <TxNotification
              status={convertTxStatus}
              hash={convertTxHash}
              receipt={convertTxReceipt}
              title={notificationBoxTitles.convert[convertTxStatus]}
            />
          </TxNotificationBox>
        </div>
      );
    default:
      return null;
  }
};

const TxNotificationBox = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 5px;
  margin-left: 5px;
`;

const ConfirmBox = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

const ConfirmIconBox = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export default ConfirmFormRenderer;
