import React, { Component } from 'react';
import "../../styles/login.scss";


class Login extends Component {
    render(){
        return(
            <>
                {/*账密登录*/}
                <div className="login-content">
                    <h2>欢迎登录生鲜超市</h2>
                    <div className="tel_inputBox">
                        <input type="text" placeholder="请输入用户名" className="txt-input changeInput" id="username"
                               name="username" maxLength="64">
                            {/*清除目前输入的内容*/}
                            </input><i className="ico-close"></i>
                    </div>
                    <div className="password_inputBox">
                        {/*<label class="input-label" style="display: inline-block;left:0;">请输入密码</label>*/}
                        {/*清除目前输入的内容*/}
                        <i className="ico-close abs-close"></i>
                        {/*查看目前输入的密码*/}
                        <i className="ico-eye"></i>
                        <a href="#" id="goForgetPwd"
                           className="forgetPass">忘记密码</a>
                        <input type="password" placeholder="请输入密码" className="txtPassport-input changeInput"
                               id="password" maxLength="20" name="password"></input>
                    </div>
                    {/*图片验证码 start*/}
                    {/*<div className="form-content imageVerifyArea" id="imageVerifyArea1" style="display: none;">*/}
                    {/*    <label className="input-label" style="display: inline-block;left:0;">请输入验证码</label>*/}
                    {/*    <input type="text" name="yzm" className="verifyCode changeInput" maxLength="4"*/}
                    {/*           autoComplete="off"></input>*/}
                    {/*        <i className="ico-close abs-close hide"></i>*/}
                    {/*        /!*<div class="form-input">*!/*/}
                    {/*        /!*    <input type="text" name="yzm" class="verifyCode" maxlength="4" autocomplete="off" placeholder="请输入验证码">*!/*/}
                    {/*        /!*</div>*!/*/}
                    {/*        <div className="codeNumImg">*/}
                    {/*            <img className="vcodeimg" src="" name="WAP_login_password_pic"></img>*/}
                    {/*        </div>*/}
                    {/*</div>*/}
                    {/*<div className="siller-account sillerVerifyCode" id="WAP_login_password_slide"*/}
                    {/*     style="margin: 0.4rem 0px; display: none;">*/}
                    {/*    <div id="siller2" className=" dt_parent float dt_parent float"*/}
                    {/*         style="width: 100%; transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);">*/}
                    {/*        <div className="dt_child_content" id="siller2_dt_child_content_containor"*/}
                    {/*             style="width: 100%;">*/}
                    {/*            <div className="dt_slide_bar"></div>*/}
                    {/*            <div className="dt_notice" id="dt_notice" style="width: 100%;">请按住滑块拖到最右边</div>*/}
                    {/*            <div className="dt_child_content_knob"></div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="siller-box sillerVerifyCode" id="iarUsernamedx" style="display: none;">*/}
                    {/*    <div id="iar1dx"></div>*/}
                    {/*</div>*/}
                    {/*图片验证码 end*/}
                    <div className="btnBox">
                        <a href="#" className="login_btn">登录</a>
                        <a href="#" className="register_switch_btn_box">没有账号？去注册</a>
                    </div>
                </div>
             </>
        );
    }
}
export default Login;