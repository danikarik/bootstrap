import * as React from 'react';

interface IProps {}

interface IState { token: string }

class CSRFToken extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            token: this.getToken()
        }
    }
    private getToken(): string {
        let token = '';
        let meta = document.head.querySelector('meta[name="csrf-token"]') as HTMLMetaElement;
        if (meta) {
            token = meta.content;
        } else {
            console.error('CSRF token not found');
        }
        return token;
    }
    public render() {
        return (
            <input type="hidden" name="csrfmiddlewaretoken" value={this.state.token} />
        );
    }
}

export default CSRFToken;
