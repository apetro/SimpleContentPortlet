/*
 * Licensed to Jasig under one or more contributor license
 * agreements. See the NOTICE file distributed with this work
 * for additional information regarding copyright ownership.
 * Jasig licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file
 * except in compliance with the License. You may obtain a
 * copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
﻿/*
Copyright (c) 2003-2010, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

(function()
{
	CKEDITOR.dialog.add( 'pastetext', function( editor )
		{
			return {
				title : editor.lang.pasteText.title,

				minWidth : CKEDITOR.env.ie && CKEDITOR.env.quirks ? 368 : 350,
				minHeight : 240,

				onShow : function()
				{
					// Reset the textarea value.
					this.getContentElement( 'general', 'content' ).getInputElement().setValue( '' );
				},

				onOk : function()
				{
					// Get the textarea value.
					var text = this.getContentElement( 'general', 'content' ).getInputElement().getValue(),
						editor = this.getParentEditor();

					setTimeout( function()
					{
						editor.fire( 'paste', { 'text' : text } );
					}, 0 );
				},

				contents :
				[
					{
						label : editor.lang.common.generalTab,
						id : 'general',
						elements :
						[
							{
								type : 'html',
								id : 'pasteMsg',
								html : '<div style="white-space:normal;width:340px;">' + editor.lang.clipboard.pasteMsg + '</div>'
							},
							{
								type : 'html',
								id : 'content',
								style : 'width:340px;height:170px',
								html :
									'<textarea style="' +
										'width:346px;' +
										'height:170px;' +
										'resize: none;' +
										'border:1px solid black;' +
										'background-color:white">' +
									'</textarea>',

								onLoad : function()
								{
									var label = this.getDialog().getContentElement( 'general', 'pasteMsg' ).getElement(),
										input = this.getElement();

									input.setAttribute( 'aria-labelledby', label.$.id );
								},

								focus : function()
								{
									this.getElement().focus();
								}
							}
						]
					}
				]
			};
		});
})();