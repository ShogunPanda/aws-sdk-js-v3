import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { SetIdentityMailFromDomainRequest, SetIdentityMailFromDomainResponse } from "../models/models_0";
import {
  deserializeAws_querySetIdentityMailFromDomainCommand,
  serializeAws_querySetIdentityMailFromDomainCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type SetIdentityMailFromDomainCommandInput = SetIdentityMailFromDomainRequest;
export type SetIdentityMailFromDomainCommandOutput = SetIdentityMailFromDomainResponse & __MetadataBearer;

export class SetIdentityMailFromDomainCommand extends $Command<
  SetIdentityMailFromDomainCommandInput,
  SetIdentityMailFromDomainCommandOutput,
  SESClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SetIdentityMailFromDomainCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SetIdentityMailFromDomainCommandInput, SetIdentityMailFromDomainCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "SetIdentityMailFromDomainCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetIdentityMailFromDomainRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SetIdentityMailFromDomainResponse.filterSensitiveLog,
    };

    if (typeof logger.info === "function") {
      logger.info({
        clientName,
        commandName,
      });
    }

    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SetIdentityMailFromDomainCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_querySetIdentityMailFromDomainCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SetIdentityMailFromDomainCommandOutput> {
    return deserializeAws_querySetIdentityMailFromDomainCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
