import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { SetInstanceProtectionAnswer, SetInstanceProtectionQuery } from "../models/models_0";
import {
  deserializeAws_querySetInstanceProtectionCommand,
  serializeAws_querySetInstanceProtectionCommand,
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

export type SetInstanceProtectionCommandInput = SetInstanceProtectionQuery;
export type SetInstanceProtectionCommandOutput = SetInstanceProtectionAnswer & __MetadataBearer;

export class SetInstanceProtectionCommand extends $Command<
  SetInstanceProtectionCommandInput,
  SetInstanceProtectionCommandOutput,
  AutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SetInstanceProtectionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AutoScalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SetInstanceProtectionCommandInput, SetInstanceProtectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "SetInstanceProtectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetInstanceProtectionQuery.filterSensitiveLog,
      outputFilterSensitiveLog: SetInstanceProtectionAnswer.filterSensitiveLog,
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

  private serialize(input: SetInstanceProtectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_querySetInstanceProtectionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetInstanceProtectionCommandOutput> {
    return deserializeAws_querySetInstanceProtectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
