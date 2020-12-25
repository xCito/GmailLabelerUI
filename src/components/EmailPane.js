import EmailItem from './EmailItem';

export default function EmailPane() {

    return (
        <div className='pane-container'>
            <h2 className="pane-header">Emails</h2>
            <div className="pane-body">
                <EmailItem from="Juan <juan@gmail.com>" replyTo="juan@gmail.com" subject="The Subject of the Email" body="Hi, nice to meet you. blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah "/>
                <EmailItem from="Bob <bob@gmail.com>" replyTo="bob@gmail.com" subject="Newsletter from the POTUS" body="My fellow amiericans of the world things this that things this that things this that things this that things this that things this that things this that things this that things this that things this that things this that"/>
                <EmailItem from="Juan <juan@gmail.com>" replyTo="juan@gmail.com" subject="The Subject of the Email" body="Hi, nice to meet you. blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah "/>
                <EmailItem from="Bob <bob@gmail.com>" replyTo="bob@gmail.com" subject="Newsletter from the POTUS" body="My fellow amiericans of the world things this that things this that things this that things this that things this that things this that things this that things this that things this that things this that things this that"/>
                <EmailItem from="Juan <juan@gmail.com>" replyTo="juan@gmail.com" subject="The Subject of the Email" body="Hi, nice to meet you. blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah "/>
                <EmailItem from="Bob <bob@gmail.com>" replyTo="bob@gmail.com" subject="Newsletter from the POTUS" body="My fellow amiericans of the world things this that things this that things this that things this that things this that things this that things this that things this that things this that things this that things this that"/>
            </div>
            <div className="pane-footer"></div>
        </div>
    );
}